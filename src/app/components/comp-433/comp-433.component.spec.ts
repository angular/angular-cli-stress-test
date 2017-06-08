/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp433Component } from './comp-433.component';

describe('Comp433Component', () => {
  let component: Comp433Component;
  let fixture: ComponentFixture<Comp433Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp433Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp433Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
