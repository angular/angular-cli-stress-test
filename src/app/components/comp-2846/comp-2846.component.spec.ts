/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2846Component } from './comp-2846.component';

describe('Comp2846Component', () => {
  let component: Comp2846Component;
  let fixture: ComponentFixture<Comp2846Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2846Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2846Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
