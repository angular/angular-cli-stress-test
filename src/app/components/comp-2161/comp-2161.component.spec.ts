/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2161Component } from './comp-2161.component';

describe('Comp2161Component', () => {
  let component: Comp2161Component;
  let fixture: ComponentFixture<Comp2161Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2161Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
