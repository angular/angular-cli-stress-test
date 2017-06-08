/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2106Component } from './comp-2106.component';

describe('Comp2106Component', () => {
  let component: Comp2106Component;
  let fixture: ComponentFixture<Comp2106Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2106Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2106Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
