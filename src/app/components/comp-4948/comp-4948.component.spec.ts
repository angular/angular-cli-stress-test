/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4948Component } from './comp-4948.component';

describe('Comp4948Component', () => {
  let component: Comp4948Component;
  let fixture: ComponentFixture<Comp4948Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4948Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4948Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
