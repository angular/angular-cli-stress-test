/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2159Component } from './comp-2159.component';

describe('Comp2159Component', () => {
  let component: Comp2159Component;
  let fixture: ComponentFixture<Comp2159Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2159Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2159Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
