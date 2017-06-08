/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp879Component } from './comp-879.component';

describe('Comp879Component', () => {
  let component: Comp879Component;
  let fixture: ComponentFixture<Comp879Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp879Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp879Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
