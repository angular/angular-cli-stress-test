/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4409Component } from './comp-4409.component';

describe('Comp4409Component', () => {
  let component: Comp4409Component;
  let fixture: ComponentFixture<Comp4409Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4409Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4409Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
