/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp408Component } from './comp-408.component';

describe('Comp408Component', () => {
  let component: Comp408Component;
  let fixture: ComponentFixture<Comp408Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp408Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp408Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
