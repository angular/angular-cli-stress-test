/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2041Component } from './comp-2041.component';

describe('Comp2041Component', () => {
  let component: Comp2041Component;
  let fixture: ComponentFixture<Comp2041Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2041Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2041Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
