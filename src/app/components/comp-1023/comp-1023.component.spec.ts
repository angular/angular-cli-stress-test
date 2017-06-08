/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp1023Component } from './comp-1023.component';

describe('Comp1023Component', () => {
  let component: Comp1023Component;
  let fixture: ComponentFixture<Comp1023Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp1023Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp1023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
