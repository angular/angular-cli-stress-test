/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2280Component } from './comp-2280.component';

describe('Comp2280Component', () => {
  let component: Comp2280Component;
  let fixture: ComponentFixture<Comp2280Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2280Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
