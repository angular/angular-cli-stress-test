/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp317Component } from './comp-317.component';

describe('Comp317Component', () => {
  let component: Comp317Component;
  let fixture: ComponentFixture<Comp317Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp317Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp317Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
