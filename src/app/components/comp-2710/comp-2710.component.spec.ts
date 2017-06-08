/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2710Component } from './comp-2710.component';

describe('Comp2710Component', () => {
  let component: Comp2710Component;
  let fixture: ComponentFixture<Comp2710Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2710Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2710Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
