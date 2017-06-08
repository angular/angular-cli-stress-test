/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp944Component } from './comp-944.component';

describe('Comp944Component', () => {
  let component: Comp944Component;
  let fixture: ComponentFixture<Comp944Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp944Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp944Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
