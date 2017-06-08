/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp119Component } from './comp-119.component';

describe('Comp119Component', () => {
  let component: Comp119Component;
  let fixture: ComponentFixture<Comp119Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp119Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
