/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2750Component } from './comp-2750.component';

describe('Comp2750Component', () => {
  let component: Comp2750Component;
  let fixture: ComponentFixture<Comp2750Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2750Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2750Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
