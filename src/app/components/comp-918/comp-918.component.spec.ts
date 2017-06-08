/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp918Component } from './comp-918.component';

describe('Comp918Component', () => {
  let component: Comp918Component;
  let fixture: ComponentFixture<Comp918Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp918Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp918Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
