/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp51Component } from './comp-51.component';

describe('Comp51Component', () => {
  let component: Comp51Component;
  let fixture: ComponentFixture<Comp51Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp51Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp51Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
