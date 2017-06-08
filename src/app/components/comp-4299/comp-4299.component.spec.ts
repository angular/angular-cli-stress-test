/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4299Component } from './comp-4299.component';

describe('Comp4299Component', () => {
  let component: Comp4299Component;
  let fixture: ComponentFixture<Comp4299Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4299Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4299Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
