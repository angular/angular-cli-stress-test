/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2643Component } from './comp-2643.component';

describe('Comp2643Component', () => {
  let component: Comp2643Component;
  let fixture: ComponentFixture<Comp2643Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2643Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2643Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
