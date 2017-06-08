/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2317Component } from './comp-2317.component';

describe('Comp2317Component', () => {
  let component: Comp2317Component;
  let fixture: ComponentFixture<Comp2317Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2317Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2317Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
