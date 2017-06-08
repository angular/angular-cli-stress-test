/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp814Component } from './comp-814.component';

describe('Comp814Component', () => {
  let component: Comp814Component;
  let fixture: ComponentFixture<Comp814Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp814Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp814Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
