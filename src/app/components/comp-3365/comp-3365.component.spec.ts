/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3365Component } from './comp-3365.component';

describe('Comp3365Component', () => {
  let component: Comp3365Component;
  let fixture: ComponentFixture<Comp3365Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3365Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3365Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
