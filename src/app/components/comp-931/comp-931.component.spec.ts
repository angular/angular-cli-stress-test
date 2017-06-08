/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp931Component } from './comp-931.component';

describe('Comp931Component', () => {
  let component: Comp931Component;
  let fixture: ComponentFixture<Comp931Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp931Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp931Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
