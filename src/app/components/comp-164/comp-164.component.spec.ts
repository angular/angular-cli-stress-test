/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp164Component } from './comp-164.component';

describe('Comp164Component', () => {
  let component: Comp164Component;
  let fixture: ComponentFixture<Comp164Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp164Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp164Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
