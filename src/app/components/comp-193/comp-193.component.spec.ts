/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp193Component } from './comp-193.component';

describe('Comp193Component', () => {
  let component: Comp193Component;
  let fixture: ComponentFixture<Comp193Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp193Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp193Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
