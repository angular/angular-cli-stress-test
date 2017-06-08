/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2096Component } from './comp-2096.component';

describe('Comp2096Component', () => {
  let component: Comp2096Component;
  let fixture: ComponentFixture<Comp2096Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2096Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2096Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
