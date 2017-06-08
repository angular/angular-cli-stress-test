/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp767Component } from './comp-767.component';

describe('Comp767Component', () => {
  let component: Comp767Component;
  let fixture: ComponentFixture<Comp767Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp767Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp767Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
