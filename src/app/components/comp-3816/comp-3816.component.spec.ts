/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3816Component } from './comp-3816.component';

describe('Comp3816Component', () => {
  let component: Comp3816Component;
  let fixture: ComponentFixture<Comp3816Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3816Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3816Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
