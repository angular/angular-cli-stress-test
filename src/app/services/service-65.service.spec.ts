/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service65Service } from './service-65.service';

describe('Service65Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service65Service]
    });
  });

  it('should ...', inject([Service65Service], (service: Service65Service) => {
    expect(service).toBeTruthy();
  }));
});
