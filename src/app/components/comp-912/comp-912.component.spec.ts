/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp912Component } from './comp-912.component';

describe('Comp912Component', () => {
  let component: Comp912Component;
  let fixture: ComponentFixture<Comp912Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp912Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp912Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
