/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp384Component } from './comp-384.component';

describe('Comp384Component', () => {
  let component: Comp384Component;
  let fixture: ComponentFixture<Comp384Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp384Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp384Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
