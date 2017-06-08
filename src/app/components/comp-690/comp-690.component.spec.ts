/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp690Component } from './comp-690.component';

describe('Comp690Component', () => {
  let component: Comp690Component;
  let fixture: ComponentFixture<Comp690Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp690Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp690Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
