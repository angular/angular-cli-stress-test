/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp70Component } from './comp-70.component';

describe('Comp70Component', () => {
  let component: Comp70Component;
  let fixture: ComponentFixture<Comp70Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp70Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp70Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
