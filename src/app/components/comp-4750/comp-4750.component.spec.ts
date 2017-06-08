/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4750Component } from './comp-4750.component';

describe('Comp4750Component', () => {
  let component: Comp4750Component;
  let fixture: ComponentFixture<Comp4750Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4750Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4750Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
