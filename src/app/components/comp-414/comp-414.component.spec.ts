/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp414Component } from './comp-414.component';

describe('Comp414Component', () => {
  let component: Comp414Component;
  let fixture: ComponentFixture<Comp414Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp414Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp414Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
