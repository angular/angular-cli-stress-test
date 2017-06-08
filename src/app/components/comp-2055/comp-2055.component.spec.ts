/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2055Component } from './comp-2055.component';

describe('Comp2055Component', () => {
  let component: Comp2055Component;
  let fixture: ComponentFixture<Comp2055Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2055Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2055Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
