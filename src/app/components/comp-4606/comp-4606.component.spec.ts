/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4606Component } from './comp-4606.component';

describe('Comp4606Component', () => {
  let component: Comp4606Component;
  let fixture: ComponentFixture<Comp4606Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4606Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4606Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
