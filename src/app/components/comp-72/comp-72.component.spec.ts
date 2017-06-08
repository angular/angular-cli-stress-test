/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp72Component } from './comp-72.component';

describe('Comp72Component', () => {
  let component: Comp72Component;
  let fixture: ComponentFixture<Comp72Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp72Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp72Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
