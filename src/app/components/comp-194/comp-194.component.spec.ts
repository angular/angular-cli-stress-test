/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp194Component } from './comp-194.component';

describe('Comp194Component', () => {
  let component: Comp194Component;
  let fixture: ComponentFixture<Comp194Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp194Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
