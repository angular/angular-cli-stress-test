/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3900Component } from './comp-3900.component';

describe('Comp3900Component', () => {
  let component: Comp3900Component;
  let fixture: ComponentFixture<Comp3900Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3900Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3900Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
