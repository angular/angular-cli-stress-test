/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4905Component } from './comp-4905.component';

describe('Comp4905Component', () => {
  let component: Comp4905Component;
  let fixture: ComponentFixture<Comp4905Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4905Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4905Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
