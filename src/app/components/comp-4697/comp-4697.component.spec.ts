/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4697Component } from './comp-4697.component';

describe('Comp4697Component', () => {
  let component: Comp4697Component;
  let fixture: ComponentFixture<Comp4697Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4697Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4697Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
