/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service177Service } from './service-177.service';

describe('Service177Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service177Service]
    });
  });

  it('should ...', inject([Service177Service], (service: Service177Service) => {
    expect(service).toBeTruthy();
  }));
});
