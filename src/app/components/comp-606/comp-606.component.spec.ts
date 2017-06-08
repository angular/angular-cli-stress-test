/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp606Component } from './comp-606.component';

describe('Comp606Component', () => {
  let component: Comp606Component;
  let fixture: ComponentFixture<Comp606Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp606Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp606Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
