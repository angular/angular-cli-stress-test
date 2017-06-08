/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1638Component } from './comp-1638.component';

describe('Comp1638Component', () => {
  let component: Comp1638Component;
  let fixture: ComponentFixture<Comp1638Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1638Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1638Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
