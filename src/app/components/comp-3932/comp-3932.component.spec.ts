/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3932Component } from './comp-3932.component';

describe('Comp3932Component', () => {
  let component: Comp3932Component;
  let fixture: ComponentFixture<Comp3932Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3932Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3932Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
