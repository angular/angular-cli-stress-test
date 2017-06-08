/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4967Component } from './comp-4967.component';

describe('Comp4967Component', () => {
  let component: Comp4967Component;
  let fixture: ComponentFixture<Comp4967Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4967Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4967Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
