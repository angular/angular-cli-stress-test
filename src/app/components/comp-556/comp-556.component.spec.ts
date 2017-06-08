/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp556Component } from './comp-556.component';

describe('Comp556Component', () => {
  let component: Comp556Component;
  let fixture: ComponentFixture<Comp556Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp556Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp556Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
