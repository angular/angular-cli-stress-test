/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp739Component } from './comp-739.component';

describe('Comp739Component', () => {
  let component: Comp739Component;
  let fixture: ComponentFixture<Comp739Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp739Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp739Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
