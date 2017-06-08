/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp35Component } from './comp-35.component';

describe('Comp35Component', () => {
  let component: Comp35Component;
  let fixture: ComponentFixture<Comp35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp35Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
