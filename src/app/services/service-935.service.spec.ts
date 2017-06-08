/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service935Service } from './service-935.service';

describe('Service935Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service935Service]
    });
  });

  it('should ...', inject([Service935Service], (service: Service935Service) => {
    expect(service).toBeTruthy();
  }));
});
